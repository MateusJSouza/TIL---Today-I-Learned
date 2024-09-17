import * as DialogPrimitive from '@radix-ui/react-dialog'

export function Dialog(props: DialogPrimitive.DialogProps) {
  return <DialogPrimitive.Dialog {...props} />
}

export function DialogTrigger(props: DialogPrimitive.DialogTriggerProps) {
  return <DialogPrimitive.DialogTrigger {...props} />
}

export function DialogClose(props: DialogPrimitive.DialogCloseProps) {
  return <DialogPrimitive.DialogClose {...props} />
}

export function DialogPortal(props: DialogPrimitive.DialogPortalProps) {
  return <DialogPrimitive.DialogPortal {...props} />
}

export function DialogOverlay(props: DialogPrimitive.DialogOverlayProps) {
  return (
    <DialogPrimitive.DialogOverlay
      {...props}
      className="fixed inset-0 z-40 bg-black/40"
    />
  )
}

export function DialogContent(props: DialogPrimitive.DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.DialogContent
        {...props}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark-grey p-6 rounded-md w-[480px] max-w-[90vw] max-h-[90vh] overflow-y-auto shadow-lg z-50"
      />
    </DialogPortal>
  )
}

export function DialogTitle(props: DialogPrimitive.DialogTitleProps) {
  return (
    <DialogPrimitive.DialogTitle
      {...props}
      className="text-lg font-semibold text-black dark:text-white"
    />
  )
}

export function DialogDescription(
  props: DialogPrimitive.DialogDescriptionProps
) {
  return (
    <DialogPrimitive.DialogDescription
      {...props}
      className="text-zinc-400 text-sm leading-relaxed"
    />
  )
}
