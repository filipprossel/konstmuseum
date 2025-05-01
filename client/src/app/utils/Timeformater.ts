export function formatDate(input: string | Date): string {
    const date = typeof input === "string" ? new Date(input) : input;
    const now = new Date();
  
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
    const diffDays = Math.floor((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
    const timeString = date.toLocaleTimeString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
    });
  
    if (diffDays === 0) {
      return `idag kl ${timeString}`;
    } else if (diffDays === 1) {
      return `imorgon kl ${timeString}`;
    } else {
      return date.toLocaleDateString("sv-SE", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  }
  