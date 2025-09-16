<template>
  <!-- <img :src="url" :srcset="srcset" /> -->
  <div role="img" class="dg-img relative overflow-hidden" v-bind="attrs" :style="style">
    <div :style="ratioStyle"></div>
    <div class="dg-img__image absolute inset-0" :style="imgContainerStyle"></div>
    <div style="position:absolute;z-index:9999;color:red">{{ url }}</div> <!-- DEBUG -->
  </div>
</template>

<script>
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";
import { isEqual, isArray } from "@/lib/lodash";
import { isBase64 } from "@/utils/validator";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("sm");
const platform = computed(() => {
  if (isMobile.value) return "mobile";
  // if (isTablet.value) return "tablet";
  return "pc";
});

//const originModules = import.meta.globEager("../../assets/images/**/*");
const originModules = import.meta.glob("../../assets/images/**/*", {
  eager: true,
});
const modules = import.meta.glob("../../assets/images/**/*");
const imageList = [];
Object.keys(modules).forEach((path) => {
  imageList.push(path);
});

export default {
  name: "DgImg",
  props: {
    src: {
      type: String,
      default: "",
      required: true,
    },
    ratio: {
      type: [String, Number],
      ratio: "",
      default: "1",
    },
    contain: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: "50% 50%",
    },
    imgStyle: {
      type: Object,
      default: () => { },
    },
    placeholderSrc: {
      type: String,
      default: "",
    },
    style: {
      type: Object,
      default: () => { },
    },
  },
  setup() {
    const attrs = useAttrs();
    return {
      attrs,
    };
  },
  data() {
    return {
      currentSrc: "",
      naturalRatio: 0,
      destroyed: false,
      loaded: false,
    };
  },
  computed: {
    isRwd() {
      const regex = new RegExp(this.currentSrc);
      const target = isArray(imageList)
        ? imageList?.find((item) => item?.match(regex)) ?? ""
        : "";
      return !/general/.test(target);
    },
    imgType() {
      const regex = new RegExp(this.currentSrc);
      const target = isArray(imageList)
        ? imageList
          ?.find((item) => item?.match(regex))
          ?.replace(/(.+)\.(jpg|png|gif)/, "$2") ?? ""
        : "";
      return imageList && this.currentSrc && target ? target : "";
    },
    device() {
      return this.isRwd ? platform.value : "general";
    },
    density1x() {
      return this.currentSrc && this.imgType
        ? originModules[
          `../../assets/images/${this.device}/${this.currentSrc}.${this.imgType}`
        ]?.default || ""
        : "";
    },
    // srcset() {
    //   if (this.density1x) return `${this.density1x} 1x`;
    //   return "";
    // },
    placeholderSrcImgType() {
      const regex = new RegExp(this.placeholderSrc);
      const target = isArray(imageList)
        ? imageList
          ?.find((item) => item?.match(regex))
          ?.replace(/(.+)\.(jpg|png|gif)/, "$2") ?? ""
        : "";
      return imageList && this.placeholderSrc && target ? target : "";
    },
    placeholderSrcUrl() {
      return this.placeholderSrc && this.placeholderSrcImgType
        ? originModules[
          `../../assets/images/${this.device}/${this.placeholderSrc}.${this.placeholderSrcImgType}`
        ]?.default || ""
        : "";
    },
    url() {
      if (this.imgType)
        return this.loaded
          ? this.density1x || this.placeholderSrcUrl || ""
          : this.placeholderSrcUrl || "";
      if (/(^http)|(base64)/.test(this.src))
        return this.loaded
          ? this.src || this.placeholderSrcUrl || ""
          : this.placeholderSrcUrl;
      return this.placeholderSrcUrl || "";
    },
    // style() {
    //   return {
    //     width: this.width,
    //     height: this.height,
    //   };
    // },
    ratioStyle() {
      const ratio = this.ratio || this.naturalRatio;
      if (!isFinite(ratio) || ratio <= 0) ratio = 1;
      return { paddingBottom: `${100 / ratio}%` };
    },
    imgContainerStyle() {
      return {
        backgroundSize: this.contain === true ? "contain" : "cover",
        backgroundPosition: this.position,
        backgroundImage: `url("${this.url}")`,
        backgroundRepeat: "no-repeat",
        ...this.imgStyle,
      };
    },
  },
  watch: {
    src(newVal, oldVal) {
      if (!isEqual(newVal, oldVal) && newVal) {
        this.methodLoad();
      }
    },
  },
  mounted() {
    if (this.placeholderSrc) {
      const img = new Image();
      this.currentSrc = this.placeholderSrc;
      img.src = this.density1x || this.placeholderSrc;
      img.onload = () => {
        this.methodComputeRatio(img);
      };
      img.onerror = () => {
        console.info("err");
      };
    }
    this.methodLoad();
  },
  unmounted() {
    this.destroyed = true;
  },
  methods: {
    methodComputeRatio(img) {
      const { naturalHeight, naturalWidth } = img;

      this.naturalRatio =
        naturalHeight === 0 ? 1 : naturalWidth / naturalHeight;
    },
    methodLoad() {
      if (!this.src) {
        return;
      }

      const img = new Image();
      if (!isBase64(this.src))
        this.currentSrc = this.src || this.placeholderSrc;

      img.onload = () => {
        if (this.destroyed === true) {
          return;
        }

        // if we are still rendering same image
        if (img.decode !== undefined) {
          img
            .decode()
            .catch((/* err */) => { })
            .then(() => {
              if (this.destroyed !== true) {
                this.methodOnLoad(img);
              }
            });
        } else {
          this.methodOnLoad(img);
        }
      };

      img.src = this.density1x || this.src;

      // if (this.srcset) {
      //   img.srcset = this.srcset;
      // }

      if (this.sizes !== undefined) {
        img.sizes = this.sizes;
      } else {
        Object.assign(img, this.style);
      }
    },
    methodOnLoad(img) {
      this.loaded = true;
      this.methodComputeRatio(img);
    },
  },
};
</script>
