import { randomInteger } from './actions';

export function answer(ctx, text) {
    const key = text.toLowerCase()
    switch (key) {
        case "привет":
        case "здравствуй":
        case "hi":
            return `Привет ${ctx.from.first_name}, я бот`

        case key.match(/дай.*(?=фот)|фот.*(?=дай)/igm) ? key : true:
            ctx.replyWithPhoto({ url: `https://placekitten.com/g/400/${randomInteger(300, 700)}` })
            // ctx.replyWithAnimation(AnimationUrl1)
            return 'Держи'
        case key.match(/хуй/gi) ? key : true:
        case key.match(/пидор/gi) ? key : true:
            return `${ctx.from.first_name}, Ты пидор! Иди на хуй!`
        default:
            console.log(ctx.from);
            ctx.replyWithMediaGroup([
                // {
                //     media: 'AgADAgADKasxG_BnOUhgFQGmvPYIRCzoug8ABAEAAwIAA3kAAzF_AgABFgQ',
                //     caption: 'Фото',
                //     type: 'photo'
                // },
                // {
                //     media: { source: './cats/cat1.jpg' },
                //     caption: 'From file',
                //     type: 'photo'
                // },
                {
                    media: { url: `https://placekitten.com/g/400/50${randomInteger(1, 5)}` },
                    caption: 'Рандомный кот',
                    type: 'photo'
                }
            ])
            return `${ctx.from.first_name}, я не понимаю, переформулируй вопрос`

    }
}