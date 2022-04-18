import React from 'react';
import { Viewer, Worker, LocalizationMap } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import ar_AE from '@react-pdf-viewer/locales/lib/ar_AE.json';

export function PDFViewer(props: any) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js">
      <div style={{ height: '100%', width: '100%' }}>
        <Viewer
          fileUrl={props.src}
          plugins={[defaultLayoutPluginInstance]}
          localization={ar_AE as unknown as LocalizationMap}
        />
      </div>
    </Worker>
  );
}
