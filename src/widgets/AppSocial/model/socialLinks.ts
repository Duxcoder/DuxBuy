import type { Component } from 'vue';
import {
  IconVk,
  IconFacebook,
  IconInstagram,
  IconTelegram,
  IconYoutube
} from '@/shared/ui/icons/social';

export type SocialType = {
  name: string;
  path: string;
  icon: Component;
};

export const socialLinks: SocialType[] = [
  { name: 'vk', path: 'https://vk.com/', icon: IconVk },
  {
    name: 'instagram',
    path: 'https://www.instagram.com/',
    icon: IconInstagram
  },
  { name: 'facebook', path: 'https://www.facebook.com/', icon: IconFacebook },
  { name: 'youtube', path: 'https://youtube.com', icon: IconYoutube },
  { name: 'telegram', path: 'https://web.telegram.org/k/', icon: IconTelegram }
];
