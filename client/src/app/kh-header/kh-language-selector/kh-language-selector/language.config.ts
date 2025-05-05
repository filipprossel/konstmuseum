export const languages: { value: string; label: string; imgLink: string }[] = [
    { value: "swe", label: "Svenska", imgLink: "sweden.png" },
    { value: "en", label: "English", imgLink: "english.webp" },
];


export function getLanguageImagePath(value: string): string | null {
    const lang = languages.find(l => l.value === value);
    return lang ? 'assets/languageFlags/' + lang.imgLink : null;
}