param(
    [string]$fireBaseToken,
    [string]$fireBaseProject,
    [string]$releaseMessage
)
$dir = Split-Path $MyInvocation.MyCommand.Path
Push-Location $dir

write-host "starting deployment...";
firebase --version;
firebase deploy --token $fireBaseToken --project $fireBaseProject --message "Release: $releaseMessage";
write-host "deployment complet.";

Pop-Location