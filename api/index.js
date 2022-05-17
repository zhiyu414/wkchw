import axios from "axios";

export const getUbikeInfo = async () => {
   const { data } = await axios.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json');
   return data;
 };
//  export const getUbikeInfo = async () => {
//   const { data } = await axios.get('https://data.ntpc.gov.tw/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview');
//   return data;
// };
