export default function excludeModulePlugin() {
    return {
        name: 'exclude-module-plugin',
        resolveId(id) {
            // Exclude the specific module you want to ignore
            if (id === 'ilib' || id === './lib/ilib-qt.js' || id === './lib/ilib-rhino.js' || id === './lib/ilib-ringo.js') {
                return false;
            }
        },
    };
}