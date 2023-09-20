import { SettingsTabs } from './view/components/SettingsTabs'
import { Select } from './view/components/Form/Select'
import * as Input from '@/app/view/components/Input'
import * as FileInput from '@/app/view/components/Form/FileInput'

import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { SelectItem } from './view/components/Form/Select/SelectItem'
import { Textarea } from './view/components/Form/Textarea'
import { Label } from './view/components/Form/Label'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <section className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </section>
          <section className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </section>
        </div>
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <Label htmlFor="firstName">Name</Label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control defaultValue="Mateus" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Jesus" />
              </Input.Root>
            </div>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="email">Email address</Label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="mateusjdev@gmail.com"
              />
            </Input.Root>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="photo">
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </Label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="role">Role</Label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CEO" />
            </Input.Root>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="country">Country</Label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United State" />
              <SelectItem value="ge" text="Germany" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="timezone">Timezone</Label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (PST) (UTC-08:00)"
              />
              <SelectItem value="utc3" text="América São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="bio">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </Label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 transition-colors hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 transition-colors hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 transition-colors hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 transition-colors hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 transition-colors hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development. "
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="projects">
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets on your work.
              </span>
            </Label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
