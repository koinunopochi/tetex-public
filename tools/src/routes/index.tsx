

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// @ts-ignore
const ToolsRootPage = React.lazy(() => import('@pages/ToolsRootPage'));
const Base64Converter = React.lazy(
  // @ts-ignore
  () => import('@pages/base64/Base64Converter')
);
// @ts-ignore
const FormatTool = React.lazy(() => import('@pages/formatTool/FormatTool'));
const NewlineConverter = React.lazy(
  // @ts-ignore
  () => import('@pages/newlineConverter/NewlineConverter')
);
const URLEncoderDecoder = React.lazy(
  // @ts-ignore
  () => import('@pages/URLEncoderDecoder/URLEncoderDecoder')
);
const UnixTimestampConverter = React.lazy(
  // @ts-ignore
  () => import('@pages/unixTimestampConverter/UnixTimestampConverter')
);
const ColorCodeConverter = React.lazy(
  // @ts-ignore
  () => import('@pages/colorCodeConverter/ColorCodeConverter')
);
// @ts-ignore
const RegexTester = React.lazy(() => import('@pages/regexTester/RegexTester'));


export const createRoutes = () => {
  const toolRoutes = (
    <>
      <Route path="/" element={<ToolsRootPage />} />
      <Route path="/base64" element={<Base64Converter />} />
      <Route path="/format" element={<FormatTool />} />
      <Route path="/newline-converter" element={<NewlineConverter />} />
      <Route
        path="/url-encoder-decoder"
        element={<URLEncoderDecoder />}
      />
      <Route
        path="/unix-timestamp-converter"
        element={<UnixTimestampConverter />}
      />
      <Route
        path="/color-code-converter"
        element={<ColorCodeConverter />}
      />
      <Route path="/regex-tester" element={<RegexTester />} />
      <Route path="/*" element={<Navigate to="" />} />
    </>
  );

  return {
    toolRoutes,
  };
};
