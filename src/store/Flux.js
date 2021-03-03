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
            // For Register and Login
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
                    const res = await fetch("https://3000-pink-skunk-wepde99x.ws-us03.gitpod.io/favorite", {
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
                setFavorites()
            },
            addFavorite: (input) => {
                const favorites = getStore().favorites;
                // Prevent duplicates
                if (favorites.some((favorite) => favorite.person_name === input.person_name))
                    return;

                const postFavorite = async (input) => {
                    const token = sessionStorage.getItem("token")
                    const res = await fetch("https://3000-pink-skunk-wepde99x.ws-us03.gitpod.io/favorite", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                            Authorization: "Bearer " + token
                        },
                        body: JSON.stringify({
                            "planet_name": null,
                            "person_name": input.name
                        })
                    })
                    return res.json()
                }
                postFavorite(input)

                // Add favorite to display
                const updFavorites = favorites.concat(input)
                setStore({favorites: [...updFavorites]})
            },
            removeFavorite: (input) => {
                const deleteFavorite = async (input) => {
                    const token = sessionStorage.getItem("token")
                    const res = await fetch("https://3000-pink-skunk-wepde99x.ws-us03.gitpod.io/favorite", {
                        method: "DELETE",
                        headers: {
                            "Content-type": "application/json",
                            Authorization: "Bearer " + token
                        },
                        body: JSON.stringify({
                            "id": input.id
                        })
                    })
                    return res.json()
                }
                deleteFavorite(input)

                // Delete favorite from display
                const favorites = getStore().favorites;
                const updFavorites = favorites.filter(favorite => !(favorite.person_name === input.person_name || favorite.name === input.person_name))
                setStore({favorites: [... updFavorites]})

            },
        },
    };
};

export default getState;
