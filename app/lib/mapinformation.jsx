import Script from "next/script";

export default function Maps() {

  return (
    <>
      <Script
        type="text/javascript"
        src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=bukc5nvt67"
      />
    </>
  );
}
