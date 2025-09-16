import numeral from "numeral";
import mime from "mime-db";
import validUrl from "valid-url";
import { isEmpty } from "@/lib/lodash";

const f = () => false;
const dataUrlRegex = /^data:((?:\w+\/(?:(?!;).)+)?)((?:;[\w\W]*?[^;])*),(.+)$/;

export const isFile = (v, cb = f) => v instanceof File || cb("非檔案");
export const required = (v, cb = f) =>
  !isEmpty(v) || (isFile(v) && !!v) || cb("此項為必填");
export const min =
  (n) =>
  (v, cb = f) =>
    v?.length >= n || cb(`不可少於${n}個字`);
export const max =
  (n) =>
  (v, cb = f) =>
    v?.length <= n || cb(`不可超過${n}個字`);
export const maxFileSize =
  (n) =>
  (v, cb = f) =>
    typeof v !== "object" ||
    v?.size <= numeral(n).value() ||
    cb(`檔案大小不可超過${n}`);
export const maxItem =
  (n) =>
  (v, cb = f) =>
    v?.length <= n || cb(`不可超過${n}項`);
export const isBase64 = (v, cb = f) =>
  dataUrlRegex.test(v) || cb("此項非base64圖片");
export const checkMail = (v, cb = f) =>
  !v ||
  /^[A-Za-z0-9.\u4E00-\u9FA5_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(v) ||
  cb("請輸入正確的電子信箱");

export const checkEmailIsDigiwin = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@digiwin\.com$/;
  return emailRegex.test(email);
};

export const checkPhone = (v, cb = f) =>
  !v ||
  /^09[0-9]{2}[-]?[0-9]{3}[-]?[0-9]{3}$/im.test(v) ||
  cb("請輸入正確的電話");
export const checkCompanyPhone = (v, cb = f) =>
  !v || /[0-9()#-,+.]$/im.test(v) || cb("請輸入正確的電話");
export const checkUrl = (v, cb = f) =>
  !v || validUrl.isWebUri(v) || cb("請輸入正確的網址");

export const checkVendor = (v, cb = f) => !v?.error || cb("");
// accept: .jpg,.jpeg,.png
export const checkFileType =
  (accept) =>
  (v, cb = f) => {
    const acceptList = accept?.replace(/\./g, "")?.split(/,/g);
    const validType = mime[v?.type]?.extensions?.find((l) =>
      acceptList?.includes(l)
    );
    return validType || cb("不支援該格式，請選擇其他檔案");
  };

export const realName = (v, cb = f) =>
  /^[\u4E00-\u9FA5]{2,8}$/.test(v) || cb("請輸入真實姓名");
export const realAge = (v, cb = f) =>
  (Number(v) > 0 && v < 150) || cb("請輸入真實年齡");

export const checkNumeric = (v, cb = f) =>
  !v || /^[0-9]+$/.test(v) || cb("請輸入純數字");
