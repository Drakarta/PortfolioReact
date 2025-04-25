export const getGithubData = async () => {
  const res = await fetch("https://api.github.com/users/Drakarta/repos");
  const json = await res.json();
  const data = json.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    created_at: repo.created_at,
    updated_at: repo.updated_at,
    stargazers_count: repo.stargazers_count,
    watchers_count: repo.watchers_count,
    forks_count: repo.forks_count,
    topics: repo.topics,
    language: repo.language,
    homepage: repo.homepage,
  }));
  data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
  return data;
};
