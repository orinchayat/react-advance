import React, { useEffect } from "react";
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `${title}`;
    return () => {
      console.log("done");
    };
  }, [title]);
}
