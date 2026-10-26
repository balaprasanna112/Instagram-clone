
export function loadData(key, fallback) {
  try {
    const data = localStorage.getItem("insta_" + key);

    if (data) {
      return JSON.parse(data);
    }

    return fallback;
  } catch (error) {
    return fallback;
  }
}

export function saveData(key, value) {
  try {
    localStorage.setItem("insta_" + key, JSON.stringify(value));
  } catch (error) {
    console.log("Could not save " + key + " (storage may be full)");
  }
}

export function copyText(text) {
  try {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  } catch (error) {
    console.log("Copy not supported");
  }
}

export function formatCount(n) {
  if (n >= 1000000) {
    return (n / 1000000).toFixed(1).replace(".0", "") + "M";
  }

  if (n >= 10000) {
    return Math.floor(n / 1000) + "K";
  }

  return n.toLocaleString();
}

export function readImage(file, done) {
  const reader = new FileReader();

  reader.onload = () => {
    const img = new Image();

    img.onload = () => {
      const scale = Math.min(1, 800 / img.width);
      const canvas = document.createElement("canvas");

      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      const context = canvas.getContext("2d");

      context.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL("image/jpeg", 0.8);

      done(imageData);
    };

    img.src = reader.result;
  };

  reader.readAsDataURL(file);
}
