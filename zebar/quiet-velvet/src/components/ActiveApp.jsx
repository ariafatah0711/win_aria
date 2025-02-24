const ActiveApp = ({ output }) => {
    const style = {
    }

    // const onClick = () => {
    // }

    // const handleAppClick = (workspaceId) => {
    //     if (output.glazewm && output.glazewm.runCommand) {
    //         output.glazewm.runCommand(`focus --direction left`);
    //     }
    // };

    function getAppIcon(appId) {
        if (/spotify/i.test(appId)) {
            return <i className="nf nf-md-spotify"></i>;
        } else if (/msedge|edge/i.test(appId)) {
            return <i className="nf nf-md-web"></i>;
        } else if (/code|vscode|visual studio/i.test(appId)) {
            return <i className="nf nf-dev-visualstudio"></i>;
        } else if (/obs/i.test(appId)) {
            return <i className="nf nf-fa-video_camera"></i>;
        } else if (/zoom/i.test(appId)) {
            return <i className="nf nf-md-video"></i>;
        } else if (/telegram/i.test(appId)) {
            return <i className="nf nf-md-telegram"></i>;
        } else if (/whatsapp/i.test(appId)) {
            return <i className="nf nf-md-whatsapp"></i>;
        } else if (/steam/i.test(appId)) {
            return <i className="nf nf-md-steam"></i>;
        } else if (/minecraft/i.test(appId)) {
            return <i className="nf nf-fa-cube"></i>;
        } else if (/terminal|powershell/i.test(appId)) {
            return <i className="nf nf-oct-terminal"></i>;
        } else if (/file explorer|explorer/i.test(appId)) {
            return <i className="nf nf-fa-folder_open"></i>;
        } else if (/chrome/i.test(appId)) {
            return <i className="nf nf-fa-chrome"></i>;
        } else if (/firefox/i.test(appId)) {
            return <i className="nf nf-fa-firefox"></i>;
        } else if (/discord/i.test(appId)) {
            return <i className="nf nf-md-discord"></i>;
        } else if (/notepad\+\+/i.test(appId)) {
            return <i className="nf nf-md-note_text"></i>;
        } else if (/photoshop/i.test(appId)) {
            return <i className="nf nf-dev-photoshop"></i>;
        } else if (/illustrator/i.test(appId)) {
            return <i className="nf nf-dev-illustrator"></i>;
        } else if (/excel/i.test(appId)) {
            return <i className="nf nf-md-microsoft_excel"></i>;
        } else if (/word/i.test(appId)) {
            return <i className="nf nf-md-microsoft_word"></i>;
        } else if (/powerpoint/i.test(appId)) {
            return <i className="nf nf-md-microsoft_powerpoint"></i>;
        } else {
            return <i className="nf nf-md-application"></i>;
        }
    }

    return (
        <div className='active-app' style={style}>
            {output.glazewm && output.glazewm.focusedWorkspace && (
                <div className="active-app-icons">
                    {output.glazewm.focusedWorkspace.children.map((child) => (
                        <span key={child.id} className="app-icon">
                            {getAppIcon(child.processName)}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ActiveApp;