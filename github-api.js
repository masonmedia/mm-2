exports.githubApiQuery = `
query($github_login: String!) {
	user(login: $github_login) {
		avatarUrl
		  repositories(last: 13, orderBy: {field: UPDATED_AT, direction: ASC}) {
			 nodes {
				id
				name
				description
				url
				updatedAt
				pushedAt
				forkCount
				homepageUrl
				openGraphImageUrl
				stargazers {
					totalCount
				}
				readme: object(expression: "master:README.md") {
					... on Blob {
						text
					}
				}
				licenseInfo {
					id
				}
				primaryLanguage {
					name
				}
				languages(first: 3) {
					nodes {
						name
					}
				}
			 }
		  }
		}
}
`