const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            favorites: [],
        },
        actions: {
            fetchAndSetData: () => {
                const getData = async () => {
                    const planetsRes = await fetch(
                        "https://3000-pink-skunk-wepde99x.ws-us03.gitpod.io/planet"
                    );
                    const peopleRes = await fetch(
                        "https://3000-pink-skunk-wepde99x.ws-us03.gitpod.io/person"
                    );

                    const planets = await planetsRes.json();
                    const people = await peopleRes.json();

                    setStore({ planets, people });
                };
                getData();
            },
            postData: (url, info) => {
                const postDataToApi = async (url, info) => {
                    const res = await fetch(url, {
                        method: "POST",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify(info),
                    });
                    const data = await res.json()
                    return data
                };
                return postDataToApi(url, info)
            },
            fetchAndSetFavorites: async () => {
                const fetchFavorites = async () => {
                    const token = sessionStorage.getItem("token")
                    const username = sessionStorage.getItem("username")
                    const res = await fetch(`https://3000-pink-skunk-wepde99x.ws-us03.gitpod.io/favorite/${username}`, {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json",
                            Authorization: "Bearer " + token
                        }
                    })
                    const data = await res.json()
                    return data
                }
                const setFavorites = async () => {
                    const favorites = await fetchFavorites()
                    setStore({ favorites: [...favorites]})
                }
            },
            addFavorite: (input) => {
                const favorites = getStore().favorites;
                // Prevent duplicates
                if (
                    favorites.some(
                        (favorite) => favorite.created === input.created
                    )
                )
                    return;
                const updFavorites = favorites.concat(input);
                localStorage.setItem(
                    "favorites",
                    JSON.stringify([...updFavorites])
                );
                setStore({ favorites: [...updFavorites] });
            },
            removeFavorite: (input) => {
                const favorites = getStore().favorites;
                const updFavorites = favorites.filter(
                    (favorite) => favorite !== input
                );
                localStorage.setItem(
                    "favorites",
                    JSON.stringify([...updFavorites])
                );
                setStore({ favorites: [...updFavorites] });
            },
        },
    };
};

export default getState;
