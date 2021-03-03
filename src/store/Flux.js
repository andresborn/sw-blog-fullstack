const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            favorites: [],
            planetImages: [
                {
                    name: "Tatooine",
                    url:
                        "https://img.unocero.com/2020/01/nasa-descubre-planeta-tatooine.jpg",
                },
                {
                    name: "Alderaan",
                    url:
                        "https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C780",
                },
                {
                    name: "Yavin IV",
                    url:
                        "https://starwarsblog.starwars.com/wp-content/uploads/2014/09/Image-1-2400x1200-562320997426.jpg",
                },
                {
                    name: "Hoth",
                    url:
                        "https://blog.playstation.com/tachyon/2015/11/unnamed-file-26.jpg?resize=1088,600&crop_strategy=smart",
                },
                {
                    name: "Dagobah",
                    url:
                        "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C630",
                },
                {
                    name: "Bespin",
                    url:
                        "https://lumiere-a.akamaihd.net/v1/images/databank_cloudcity_01_169_e589ba2c.jpeg?region=0%2C49%2C1560%2C780",
                },
                {
                    name: "Endor",
                    url:
                        "https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C49%2C1560%2C780",
                },
                {
                    name: "Naboo",
                    url:
                        "https://media.contentapi.ea.com/content/dam/walrus/images/2018/11/mapvista-theed-grid.jpg.adapt.crop191x100.628p.jpg",
                },
                {
                    name: "Coruscant",
                    url:
                        "https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C96%2C1536%2C768",
                },
                {
                    name: "Kamino",
                    url:
                        "https://lumiere-a.akamaihd.net/v1/images/databank_kamino_01_169_f9027822.jpeg?region=0%2C49%2C1560%2C780",
                },
            ],
            peopleImages: [
                {
                    name: "Luke Skywalker",
                    url:
                        "https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png",
                },
                {
                    name: "C-3PO",
                    url:
                        "https://img.cinemablend.com/quill/7/c/f/8/0/7/7cf807bf58f88c639eddc8fbe6fa65fb9463d9bd.png",
                },
                {
                    name: "R2-D2",
                    url:
                        "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/R2-D2_Droid.png/220px-R2-D2_Droid.png",
                },
                {
                    name: "Darth Vader",
                    url:
                        "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=960",
                },
                {
                    name: "Leia Organa",
                    url:
                        "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
                },
                {
                    name: "Owen Lars",
                    url:
                        "https://cheesecake.articleassets.meaww.com/236213/uploads/51b951d0-da71-11e9-b283-c7eec0a6c282_800_420.jpeg",
                },
                {
                    name: "Beru Whitesun lars",
                    url:
                        "https://i2.wp.com/thefutureoftheforce.com/wp-content/uploads/2018/01/aunt-beru-header.jpg?resize=672%2C372&ssl=1",
                },
                {
                    name: "R5-D4",
                    url:
                        "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=114%2C0%2C1332%2C666",
                },
                {
                    name: "Biggs Darklighter",
                    url:
                        "https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-08-10_at_3_4e1a4edf.jpeg?region=106%2C0%2C1348%2C674&width=960",
                },
                {
                    name: "Obi-Wan Kenobi",
                    url:
                        "https://clonecorridor.files.wordpress.com/2019/08/obi-wan-lightsaber-header.jpg?w=1400&h=700&crop=1}",
                },
            ],
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
            getPersonImage: (input) => {
                const filtered = getStore().peopleImages.filter(
                    (image) => image.name === input.name
                );
                const image = filtered.map((each) => each.url)[0];
                return image;
            },
            getPlanetImage: (input) => {
                const filtered = getStore().planetImages.filter(
                    (image) => image.name === input.name
                );
                const image = filtered.map((each) => each.url)[0];
                return image;
            },
        },
    };
};

export default getState;
