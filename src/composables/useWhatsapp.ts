export const useWhatsappToken = () => {
  const FALLBACK_URL = 'https://wa.me/message/RUNWV6QFALJAG1'
  const route = useRoute();
  const token = route.query.token as string;
  if (!token) return FALLBACK_URL;
  const message = token ? `token de atendimento: ${ token }` : null
  if (!message) return FALLBACK_URL;
  return `https://api.whatsapp.com/send?phone=555198781483&text=${ encodeURIComponent(message) }`
}