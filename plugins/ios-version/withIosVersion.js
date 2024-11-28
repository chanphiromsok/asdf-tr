const { withPlugins, withXcodeProject } = require('@expo/config-plugins');

const withIosVersion = (config) => {
    return withXcodeProject(config, (newConfig) => {
        const xcodeProj = newConfig.modResults;
        const currentProjectVersion = newConfig.ios.buildNumber || '1';
        const marketingVersion = newConfig.version;
        const configurations = xcodeProj.pbxXCBuildConfigurationSection();
        for (const key in configurations) {
            // Update version Target NHAM24(prod) and NHAM24DEV(dev)
            if (
                typeof configurations[key].buildSettings !== 'undefined' &&
                configurations[key].buildSettings.PRODUCT_NAME ==
                    `"${newConfig?.modRequest?.projectName}"`
            ) {
                const targetBuildSettingsObj = configurations[key].buildSettings;
                targetBuildSettingsObj.MARKETING_VERSION = marketingVersion;
                targetBuildSettingsObj.CURRENT_PROJECT_VERSION = currentProjectVersion;
            }
        }
        return newConfig;
    });
};

module.exports = (config) => withPlugins(config, [withIosVersion]);
