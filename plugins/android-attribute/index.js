const { withAndroidManifest } = require('@expo/config-plugins');

function buildActivityElement(params) {
  return {
    $: {
      ...params,
    },
  };
}
function addAttributesToMainActivity(
  androidManifest,
  { activityAttributes, service = [], metaData = [] }
) {
  const { manifest } = androidManifest;

  if (!Array.isArray(manifest['application'])) {
    console.warn('withAndroidMainActivityAttributes: No application array in manifest?');
    return androidManifest;
  }

  const application = manifest['application'].find(
    (item) => item.$['android:name'] === '.MainApplication'
  );
  if (!application) {
    console.warn('withAndroidMainActivityAttributes: No .MainApplication?');
    return androidManifest;
  }

  if (!Array.isArray(application['activity'])) {
    console.warn('withAndroidMainActivityAttributes: No activity array in .MainApplication?');
    return androidManifest;
  }
  if (service.length > 0) {
    application['service'] = [
      ...(application['service'] || []),
      ...service.map((s) => buildActivityElement(s)),
    ];
  }

  if (metaData.length > 0) {
    application['meta-data'] = [
      ...(application['meta-data'] || []),
      ...metaData.map((m) => buildActivityElement(m)),
    ];
  }

  const activity = application['activity'].find(
    (item) => item.$['android:name'] === '.MainActivity'
  );

  if (!activity) {
    console.warn('withAndroidMainActivityAttributes: No .MainActivity?');
    return androidManifest;
  }

  activity.$ = { ...activity.$, ...activityAttributes };

  return androidManifest;
}
/**
 * Example usage:
 * {
 *   metaData: [
 *     { androidName: 'com.supersami.foregroundservice.notification_channel_name', androidValue: 'Call' },
 *     { androidName: 'com.supersami.foregroundservice.notification_channel_description', androidValue: '' }
 *   ],
 *   service: [
 *     { androidName: 'com.supersami.foregroundservice.ForegroundService', androidForegroundServiceType: 'microphone' },
 *     { androidName: 'com.supersami.foregroundservice.ForegroundServiceTask' },
 *     { androidName: 'com.voximplant.foregroundservice.VIForegroundService' }
 *   ]
 * }
 */
module.exports = function withAndroidMainActivityAttributes(config, params) {
  return withAndroidManifest(config, (config) => {
    config.modResults = addAttributesToMainActivity(config.modResults, params);
    return config;
  });
};
