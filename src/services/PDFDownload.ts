import { saveAs } from "file-saver";

const CONTENT_TYPE = "application/pdf";

export default async function(
  fileURL: string,
  saveAsName: string
): Promise<void> {
  const response = await fetch(fileURL, {
    headers: {
      "Content-Type": CONTENT_TYPE
    },
    method: "GET"
  });

  if (!response.ok) {
    throw Error(response.statusText);
  }

  const fileBlob = await response.blob();
  const blob = new Blob([fileBlob], {
    type: CONTENT_TYPE // must match the Accept type
  });
  saveAs(blob, saveAsName);
}
