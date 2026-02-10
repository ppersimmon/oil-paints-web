import CloseIcon from "../../../assets/icons/close.svg?react";

const Filter = () => {
  return (
    <aside className="border-border w-65 space-y-8 p-4 lg:border">
      <div>
        <h3 className="font-inter text-text font-regular mb-2 text-base">
          Brand
        </h3>
        <div className="flex flex-wrap gap-1">
          <div className="font-regular inline-flex cursor-pointer items-center gap-x-2 rounded-lg bg-gray-100 px-3 py-1.5 text-base text-gray-700 transition-colors hover:bg-gray-200">
            <span>ROSA Gallery</span>
            <button
              type="button"
              className="text-border flex h-6 items-center justify-center"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="font-regular inline-flex cursor-pointer items-center gap-x-2 rounded-lg bg-gray-100 px-3 py-1.5 text-base text-gray-700 transition-colors hover:bg-gray-200">
            <span>ROSA Studio</span>
            <button
              type="button"
              className="text-border flex items-center justify-center"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-inter text-text font-regular mb-2 text-base">
          Brand
        </h3>
        <div className="space-y-2">
          <label className="text-text flex items-center gap-x-2 text-base">
            <input
              type="checkbox"
              className="accent-grey100 border-border h-4 w-4 rounded"
            />
            ROSA Gallery
          </label>
          <label className="text-text flex items-center gap-x-2 text-base">
            <input
              type="checkbox"
              className="accent-grey100 border-border h-4 w-4 rounded"
            />
            ROSA Studio
          </label>
        </div>
      </div>

      <div>
        <h3 className="font-inter text-text font-regular mb-2 text-base">
          Packaging
        </h3>
        <div className="space-y-2">
          <label className="text-text flex items-center gap-x-2 text-base">
            <input
              type="checkbox"
              className="accent-grey100 border-border h-4 w-4 rounded"
            />
            Set (8)
          </label>
          <label className="text-text flex items-center gap-x-2 text-base">
            <input
              type="checkbox"
              className="accent-grey100 border-border h-4 w-4 rounded"
            />
            Single (7)
          </label>
        </div>
      </div>

      <div>
        <h3 className="font-inter text-text font-regular mb-2 text-base">
          Volume
        </h3>

        <div className="space-y-2">
          <label className="text-text flex items-center gap-x-2 text-base">
            <input
              type="checkbox"
              className="accent-grey100 border-border h-4 w-4 rounded"
            />
            10 ml aluminum tube (2)
          </label>
          <label className="text-text flex items-center gap-x-2 text-base">
            <input
              type="checkbox"
              className="accent-grey100 border-border h-4 w-4 rounded"
            />
            20 ml aluminum tube (2)
          </label>
          <label className="text-text flex items-center gap-x-2 text-base">
            <input
              type="checkbox"
              className="accent-grey100 border-border h-4 w-4 rounded"
            />
            45 ml aluminum tube (8)
          </label>
          <label className="text-text flex items-center gap-x-2 text-base">
            <input
              type="checkbox"
              className="accent-grey100 border-border h-4 w-4 rounded"
            />
            100 ml aluminum tube (2)
          </label>
          <label className="text-text flex items-center gap-x-2 text-base">
            <input
              type="checkbox"
              className="accent-grey100 border-border h-4 w-4 rounded"
            />
            490 ml jar (1)
          </label>
        </div>
      </div>

      <div>
        <h3 className="font-inter text-text font-regular mb-2 text-base">
          Specialization
        </h3>
        <div className="space-y-2">
          <label className="text-text flex items-center gap-x-2 text-base">
            <input
              type="checkbox"
              className="accent-grey100 border-border h-4 w-4 rounded"
            />
            For pleiners, sketches, study (6)
          </label>
          <label className="text-text flex items-center gap-x-2 text-base">
            <input
              type="checkbox"
              className="accent-grey100 border-border h-4 w-4 rounded"
            />
            Professional painting (10)
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
