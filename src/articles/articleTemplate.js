export default {
    title: "[title] 제목",
    expandKeys: { 'title': true },
    indexList: [
        {
            key: 'title',
            label: "목차",
            command: () => {
                expandKeys["title"] = !expandKeys["title"];
            },
            items: [
                {
                    label: "목록 1",
                },
                {
                    label: "목록 2",
                },
            ],
        }
    ],
    mdSource: "# Hello, World! \n test\n\n test\n\n test\n\n  test\n\n test\n\n test\n\n test\n\n test\n\n test\n\n test\n\n test\n\n test\n\n test\n\n test\n\n test\n\n ```javascript\nconst name\n```",
}