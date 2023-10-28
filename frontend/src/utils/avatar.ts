import { FemaleAvatar, MaleAvatar } from "@/components/Icons"

export const getAvatar = (gender?: string) => {
  if(gender === 'female') {
    return FemaleAvatar;
  }
  return MaleAvatar;
}