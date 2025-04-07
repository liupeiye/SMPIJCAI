export default function Dataset() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Dataset Description</h2>
      <p className="mb-4">
        The dataset consists of images and captions annotated for object detection
        and image-text retrieval tasks. It is designed for benchmarking models
        on multimodal understanding.
      </p>
      <a
        href="/data/my_dataset.zip"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download Dataset
      </a>
    </div>
  );
}
