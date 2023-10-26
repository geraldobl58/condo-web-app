"use client";

import Modal from "@/components/ui/modal";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

import usePreviewModal from "@/hooks/use-preview-modal";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const property = usePreviewModal((state) => state.data);

  if (!property) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div
        className="
          grid
          w-full
          grid-cols-1
          items-start
          gap-x-6
          gap-y-8
          sm:grid-cols-12
          lg:gap-x-8
        "
      >
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={property.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={property} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;