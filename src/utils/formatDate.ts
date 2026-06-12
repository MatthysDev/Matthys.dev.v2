/** Locale fixe pour un rendu identique serveur/client (pas de mismatch d'hydratation). */
export function formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
