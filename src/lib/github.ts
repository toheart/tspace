export interface RepoStats {
  [repo: string]: number;
}

// 兜底数据，当 GitHub API 限流时使用
const FALLBACK_STARS: RepoStats = {
  "toheart/goanalysis": 239,
  "toheart/cocursor": 13,
};

/**
 * 从 GitHub API 获取仓库 star 数
 * 用于 ISR 增量静态再生成
 */
export async function fetchGitHubStars(
  repos: string[]
): Promise<RepoStats> {
  const stats: RepoStats = {};

  await Promise.all(
    repos.map(async (repo) => {
      try {
        const res = await fetch(`https://api.github.com/repos/${repo}`, {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
          next: { revalidate: 3600 }, // 每小时重新验证
        });

        if (res.ok) {
          const data = await res.json();
          stats[repo] = data.stargazers_count ?? FALLBACK_STARS[repo] ?? 0;
        } else {
          // API 限流或其他错误，使用兜底数据
          stats[repo] = FALLBACK_STARS[repo] ?? 0;
        }
      } catch {
        stats[repo] = FALLBACK_STARS[repo] ?? 0;
      }
    })
  );

  return stats;
}
