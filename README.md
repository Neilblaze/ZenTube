There are two Branches for now. Going to be 3 soon!

1. zentube-pm2-api <[main](https://github.com/Neilblaze/ZenTube/tree/main)>
2. Flask-Backend <[Flask-Backend](https://github.com/Neilblaze/ZenTube/tree/Flask-Backend)>
3. Coming soon!

## zentube-pm2-api

**Base URL** `https://zentube-pm2-api.glitch.me`

---

### Methods:

[GET YT Vid Info](#get-video-info) |
[GET .mp3](#get-download-mp3-file) |
[GET .mp4](#get-download-mp4-file)

---

#### `GET` YT Video Info

**endpoint:** `.../info/?url=value`

| Query | Type   | Description      |
| ----- | ------ | ---------------- |
| `url` | string | youtube url link |

**for example** : `https://zentube-pm2-api.glitch.me/info/?url=https://youtu.be/m7OWXtbiXX8`

**Response:**

```json
{
    "title": "ReactJS Tutorial - 9 - Props",
    "videoId": "m7OWXtbiXX8",
    "thumbnail": "https://i.ytimg.com/vi/m7OWXtbiXX8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfWf1gdsV1_gyVtIP31U2z8ybc_Q",
    "duration": "697",
    "views": "488947",
    "author_url": "https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw",
    "author_name": "Codevolution",
    "author_verified": false,
    "author_subscriber": 324000,
    "author_avatar": "https://yt3.ggpht.com/os7Yw6RimtysXXpc8NrXraci87TjXgZSUQyAezi0D3RrNL3YP5riIwi1-0al4Wz0XwzH6oBu6g=s48-c-k-c0x00ffffff-no-rj",
    "description": "📘 Courses - https://learn.codevolution.dev/\n💖 Support - https://www.paypal.me/Codevolution\n💾 Github - https://github.com/gopinav\n\n📱 Follow Codevolution\n+ Twitter - https://twitter.com/CodevolutionWeb\n+ Facebook - https://www.facebook.com/codevolutionweb\n\n⭐ Kite Code Completetion - https://www.kite.com/get-kite/?utm_medium=referral&utm_source=youtube&utm_campaign=codevolution&utm_content=description-only\n\n📫 Business - codevolution.business@gmail.com\n\nprops short for properties, is the optional input that your component can accept.\nIt also allows the component content to be dynamic."
}
```

---

#### `GET` Download `mp3` file

**endpoint:** `.../mp3/?url=value`

| Query | Type   | Description      |
| ----- | ------ | ---------------- |
| `url` | string | youtube url link |

**Response:**

`<vid-name>.mp3` file

---

#### `GET` Download `mp4` file

**endpoint:** `.../mp4/?url=value`

| Query | Type   | Description      |
| ----- | ------ | ---------------- |
| `url` | string | youtube url link |

**Response:**

`<vid-name>.mp4` file

---

© Neilblaze 2021 | Made with <3 for MetroHacks'21
