# tree-view-plus

Enhanced tree view for exploring and opening project files.

## Features

- **Configurable click behavior**: Open files and expand folders on single or double click. Double-clicking a file always opens it without pending state. The arrow icon always responds to a single click regardless of the folder click setting.
- **Middle-click selection**: Middle-click selects an entry without triggering scroll or open behavior.
- **Alt+click open externally**: Alt+click on a file opens it in an external program via the `open-external` service.
- **Natural sorting**: Treats multi-digit numbers atomically (e.g., `file2` before `file10`). Choose between natural sort and locale-aware collation.
- **Base name grouping**: Sort by filename base and extension independently, so files with the same base name are grouped together.
- **Debounced file watching**: Rapid file creation/deletion no longer causes excessive reloads. File system events are batched with a 100ms debounce.
- **Permanent dock item option**: Configurable `isPermanent` setting to prevent the tree view from being closed.
- **Bug fixes**: Fixed expansion state serialization, drag-and-drop URI handling, copy dialog crash, move entry error handling, continuous selection, and split pane `ItemRegistry` error.
- **Project list integration**: When the [project-list](https://github.com/asiloisad/pulsar-project-list) package is installed, the empty project view shows a "List projects" button and routes "Reopen a project" through the recent projects list.
- **Lightweight dependencies**: Removed `underscore-plus` and `fs-plus` in favor of native Node.js APIs.

## Installation

To install `tree-view-plus` search for [tree-view-plus](https://web.pulsar-edit.dev/packages/tree-view-plus) in the Install pane of the Pulsar settings or run `ppm install tree-view-plus`. Alternatively, you can run `ppm install asiloisad/pulsar-tree-view-plus` to install a package directly from the GitHub repository.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback's welcome!
