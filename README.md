# tree-panel

Enhanced tree view for exploring and opening project files.

## Features

- **Configurable click behavior**: Open files and expand folders on single or double click. The arrow icon always responds to a single click regardless of the folder click setting.
- **Natural sorting**: Treats multi-digit numbers atomically (e.g., `file2` before `file10`). Choose between natural sort and locale-aware collation.
- **Base name grouping**: Sort by filename base and extension independently, so files with the same base name are grouped together.
- **Debounced file watching**: Rapid file creation/deletion no longer causes excessive reloads. File system events are batched with a 100ms debounce.
- **Permanent dock item option**: Configurable `isPermanent` setting to prevent the tree view from being closed.
- **Split pane fix**: Resolves `ItemRegistry.addItem` error when dock pane is split.
- **Lightweight dependencies**: Removed `underscore-plus` and `fs-plus` in favor of native Node.js APIs.

## Installation

To install `tree-panel` search for [tree-panel](https://web.pulsar-edit.dev/packages/tree-panel) in the Install pane of the Pulsar settings or run `ppm install tree-panel`. Alternatively, you can run `ppm install asiloisad/pulsar-tree-panel` to install a package directly from the GitHub repository.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback's welcome!
