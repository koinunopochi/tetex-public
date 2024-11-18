import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ToolsRootPage = React.lazy(() => import('@pages/ToolsRootPage'));
const Base64Converter = React.lazy(
  () => import('@pages/base64/Base64Converter')
);
const FormatTool = React.lazy(() => import('@pages/formatTool/FormatTool'));
const NewlineConverter = React.lazy(
  () => import('@pages/newlineConverter/NewlineConverter')
);
const URLEncoderDecoder = React.lazy(
  () => import('@pages/URLEncoderDecoder/URLEncoderDecoder')
);
const UnixTimestampConverter = React.lazy(
  () => import('@pages/unixTimestampConverter/UnixTimestampConverter')
);
const ColorCodeConverter = React.lazy(
  () => import('@pages/colorCodeConverter/ColorCodeConverter')
);
const RegexTester = React.lazy(() => import('@pages/regexTester/RegexTester'));

export const createRoutes = () => {
  const toolRoutes = (
    <>
      <Route path="/tools" element={<ToolsRootPage />} />
      <Route path="/tools/base64" element={<Base64Converter />} />
      <Route path="/tools/format" element={<FormatTool />} />
      <Route path="/tools/newline-converter" element={<NewlineConverter />} />
      <Route
        path="/tools/url-encoder-decoder"
        element={<URLEncoderDecoder />}
      />
      <Route
        path="/tools/unix-timestamp-converter"
        element={<UnixTimestampConverter />}
      />
      <Route
        path="/tools/color-code-converter"
        element={<ColorCodeConverter />}
      />
      <Route path="/tools/regex-tester" element={<RegexTester />} />
      <Route path="/tools/*" element={<Navigate to="/tools" />} />
    </>
  );

  return {
    toolRoutes,
  };
};
