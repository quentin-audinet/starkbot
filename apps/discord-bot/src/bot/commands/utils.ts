import { BaseInteraction, Role } from "discord.js";

export function formatRule({ role, nbOfUsers, tokenAddress, minBalance, maxBalance, }:
    { role: string; nbOfUsers?: number; tokenAddress: string; minBalance: number; maxBalance: number; }) {
    return `\`\`\`
    • Role: ${role} (${nbOfUsers ? (nbOfUsers.toString()) : '0'} user(s))
    • Token Address: ${tokenAddress}
    • Min Balance: ${minBalance}
    • Max Balance: ${maxBalance}\`\`\``;
}

export function formatShortTokenAddress(tokenAddress: string) {
    return tokenAddress.slice(0, 6) + '...' + tokenAddress.slice(-4);
}


export async function numberOfUserWithRole(interaction: BaseInteraction, role: Role): Promise<number> {
    let usersWithRole = (await interaction.guild.members.fetch()).filter(member => member.roles.cache.has(role.id))
    return usersWithRole.size
}