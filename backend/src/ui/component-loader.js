import React, { useState } from 'react';

const Uploader = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Вы можете выполнить дополнительные операции перед загрузкой, если необходимо
      // Например, показать индикатор загрузки или отправить файл на сервер
      onUpload(selectedFile);
    } else {
      alert('Выберите файл для загрузки.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Загрузить</button>
    </div>
  );
};

export default Uploader;