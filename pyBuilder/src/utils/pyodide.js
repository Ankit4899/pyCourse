let pyodide = null;

export async function getPyodide() {
  if (!pyodide) {
    pyodide = await window.loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
    });
  }
  return pyodide;
}

