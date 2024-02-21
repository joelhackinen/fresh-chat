import { ComponentChildren } from "preact";


interface DialogProps {
  show: boolean;
  icon?: ComponentChildren;
  title?: string;
  body: ComponentChildren;
  footer?: ComponentChildren;
}

const Dialog = (props: DialogProps) => {
  return (
    <div class={`${props.show ? "fixed" : "hidden"} z-10`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                {
                  props.icon && (
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                      {props.icon}
                    </div>
                  )
                }
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <h3 class="mb-3 text-base font-semibold leading-6 text-gray-900" id="modal-title">
                    {props.title}
                  </h3>
                  {props.body}
                </div>
              </div>
            </div>
            {props.footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;