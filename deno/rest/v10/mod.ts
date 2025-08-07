import type { RoutesDeclarations, CDNRoutesDeclarations } from "../../_generated_/rest/v10/interfaces";
export * from '../common.ts';
export type * from './application.ts';
export type * from './auditLog.ts';
export type * from './autoModeration.ts';
export * from './channel.ts';
export type * from './emoji.ts';
export type * from './gateway.ts';
export type * from './guild.ts';
export type * from './guildScheduledEvent.ts';
export type * from './interactions.ts';
export type * from './invite.ts';
export * from './monetization.ts';
export type * from './oauth2.ts';
export type * from './poll.ts';
export type * from './soundboard.ts';
export type * from './stageInstance.ts';
export type * from './sticker.ts';
export type * from './template.ts';
export type * from './user.ts';
export type * from './voice.ts';
export type * from './webhook.ts';
export declare const APIVersion = "10";
export declare const Routes: RoutesDeclarations;
export declare const StickerPackApplicationId = "710982414301790216";
export type ImageSize = 1024 | 2048 | 4096 | 16 | 32 | 64 | 128 | 256 | 512 | (number & {});
export declare enum ImageFormat {
    JPEG = "jpeg",
    PNG = "png",
    WebP = "webp",
    GIF = "gif",
    Lottie = "json"
}
export declare const CDNRoutes: CDNRoutesDeclarations;
export type DefaultUserAvatarAssets = 0 | 1 | 2 | 3 | 4 | 5;
export type EmojiFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type GuildIconFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type GuildSplashFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type GuildDiscoverySplashFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type GuildBannerFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type UserBannerFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type DefaultUserAvatarFormat = Extract<ImageFormat, ImageFormat.PNG>;
export type UserAvatarFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type GuildMemberAvatarFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type ApplicationIconFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type ApplicationCoverFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type ApplicationAssetFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type AchievementIconFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type StickerPackBannerFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type TeamIconFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type StorePageAssetFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type StickerFormat = Extract<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie | ImageFormat.PNG>;
export type RoleIconFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type GuildScheduledEventCoverFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type GuildMemberBannerFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type GuildTagBadgeFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
/**
 * @deprecated Use {@link DefaultUserAvatarFormat} instead.
 */
export type DefaultUserAvatar = DefaultUserAvatarFormat;
export interface CDNQuery {
    /**
     * The returned image can have the size changed by using this query parameter
     *
     * Image size can be any power of two between 16 and 4096
     */
    size?: ImageSize;
}
export declare const RouteBases: {
    readonly api: "https://discord.com/api/v10";
    readonly cdn: "https://cdn.discordapp.com";
    readonly media: "https://media.discordapp.net";
    readonly invite: "https://discord.gg";
    readonly template: "https://discord.new";
    readonly gift: "https://discord.gift";
    readonly scheduledEvent: "https://discord.com/events";
};
export declare const OAuth2Routes: {
    readonly authorizationURL: "https://discord.com/api/v10/oauth2/authorize";
    readonly tokenURL: "https://discord.com/api/v10/oauth2/token";
    /**
     * @see {@link https://tools.ietf.org/html/rfc7009}
     */
    readonly tokenRevocationURL: "https://discord.com/api/v10/oauth2/token/revoke";
};
export type * from "../../_generated_/rest/v10/interfaces";
//# sourceMappingURL=index.d.ts.map