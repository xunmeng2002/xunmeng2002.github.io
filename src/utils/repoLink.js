const REPOSITORY_PLATFORM_NAMES = {
  'github.com': 'GitHub',
  'gitee.com': 'Gitee'
}

export function repositoryPlatformName(repositoryUrl) {
  const hostname = new URL(repositoryUrl).hostname.replace(/^www\./, '')
  return REPOSITORY_PLATFORM_NAMES[hostname] ?? hostname
}
