import { Command } from '@theia/core/lib/common/command';

export namespace ArduinoCommands {

    export const VERIFY: Command = {
        id: 'arduino-verify',
        label: 'Verify Sketch'
    }

    export const UPLOAD: Command = {
        id: 'arduino-upload',
        label: 'Upload Sketch'
    }

    export const SHOW_OPEN_CONTEXT_MENU: Command = {
        id: 'arduino-show-open-context-menu',
        label: 'Open Sketch'
    }

    export const OPEN_FILE_NAVIGATOR: Command = {
        id: 'arduino-open-file-navigator'
    }

    export const OPEN_SKETCH: Command = {
        id: 'arduino-open-file'
    }

    export const NEW_SKETCH: Command = {
        id: "arduino-new-sketch",
        label: 'New Sketch',
        category: 'File'
    }

    export const REFRESH_BOARDS: Command = {
        id: "arduino-refresh-attached-boards",
        label: "Refresh attached boards"
    }

}
