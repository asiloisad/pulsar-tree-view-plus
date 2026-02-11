# tree-view-plus

Enhanced tree view for exploring and opening project files.

## Features

- **Configurable click behavior**: Open files and expand folders on single or double click. Double-clicking a file always opens it without pending state. The arrow icon always responds to a single click regardless of the folder click setting.
- **Middle-click selection**: Middle-click selects an entry without triggering scroll or open behavior.
- **Alt+click open externally**: Alt+click on a file opens it in an external program via the `open-external` service.
- **Natural sorting**: Treats multi-digit numbers atomically (e.g., `file2` before `file10`). Choose between natural sort and locale-aware collation.
- **Base name grouping**: Sort by filename base and extension independently, so files with the same base name are grouped together.
- **Debounced file watching**: Rapid file creation/deletion no longer causes excessive reloads. File system events are batched with a 100ms debounce.
- **Survives workspace restoration**: The tree view is closeable via the X button, but protected from accidental destruction during project switching.
- **Bug fixes**: Fixed expansion state serialization, drag-and-drop URI handling, copy dialog crash, move entry error handling, continuous selection, and split pane `ItemRegistry` error.
- **Project list integration**: When the [project-list](https://github.com/asiloisad/pulsar-project-list) package is installed, the empty project view shows a "List projects" button and routes "Reopen a project" through the recent projects list.
- **Lightweight dependencies**: Removed `underscore-plus` and `fs-plus` in favor of native Node.js APIs.
- **Special roots service**: Provides a `roots` service that lets external packages inject virtual root sections into the tree view. Used by [tree-view-favourite](https://web.pulsar-edit.dev/packages/tree-view-favourite) to add a favourites section.

## Services

### `roots` (provided)

External packages can consume the `roots` service to add virtual root sections above the project folders.

```javascript
// In your package's consumeRoots method:
consumeRoots(api) {
  this.handle = api.addRoot({
    name: 'My Section',        // Section header text
    iconClass: 'icon-star',    // Icon class for the header
    className: 'my-section',   // CSS class for the section
    entryClassName: 'my-entry', // CSS class for each entry
    getEntries: () => [...]    // Function returning an array of file paths
  })
}
```

The returned handle provides:
- `handle.update()` — re-reads entries and re-renders
- `handle.toggle()` — toggle section visibility
- `handle.dispose()` — remove the section

## Installation

To install `tree-view-plus` search for [tree-view-plus](https://web.pulsar-edit.dev/packages/tree-view-plus) in the Install pane of the Pulsar settings or run `ppm install tree-view-plus`. Alternatively, you can run `ppm install asiloisad/pulsar-tree-view-plus` to install a package directly from the GitHub repository.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback's welcome!
