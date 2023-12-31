export default {
  name: "inventory",
  command: ["inventory", "inv"],
  tags: ["rpg"],
  desc: "Check Inventory",
  run: async (m, { conn }) => {
    let user = db.users[m.sender];
    var txt = `╭─────────[ STATUS ]─────────┐
│✨ Exp : ${user.exp}
│🎟️ Limit : ${user.limit}
│🕹️ Poin : ${user.point}
│📍 Role : ${user.role}
│❤️ Health : ${user.health}
╰───────────━⃝┅⃝━───────────┘ 

╭────────[ INVENTORY ]───────┐
│🪵 Wood : ${user.wood}
│🪨 Rock : ${user.rock}
│🕸️ String : ${user.string}
│💚 Emerald : ${user.emerald}
│💎 Diamond : ${user.diamond}
│🪙 Gold : ${user.gold}
│⚙️ Iron : ${user.iron}
│🗑️ Trash : ${user.trash}
│💊 Potion : ${user.potion}
╰───────────━⃝┅⃝━───────────┘

${String.fromCharCode(8206).repeat(4201)}
╭──────────[ CRATE ]─────────┐
│📦 Common : ${user.common}
│🛍️ Uncommon : ${user.uncommon}
│📮 Mythic : ${user.mythic}
│🎁 Legendary : ${user.legendary}
│📭 Pet : ${user.pet}
╰───────────━⃝┅⃝━───────────┘

╭──────────[ PET ]──────────┐
│🐈 Cat : ${user.cat}
│🐕‍🦺 Dog : ${user.dog}
│🦊 Fox : ${user.fox}
│🥩 Food : ${user.petFood}
╰───────────━⃝┅⃝━───────────┘

╭────────[ KANDANG ]────────┐ 
│🐄 Sapi : ${user.sapi}
│🐃 Banteng : ${user.banteng}
│🐅 Harimau : ${user.harimau}
│🐘 Gajah : ${user.gajah}
│🐐 Kambing : ${user.kambing}
│🐼 Panda : ${user.panda}
│🐊 Buaya : ${user.buaya}
│🐂 Kerbau : ${user.kerbau}
│🐒 Monyet : ${user.monyet}
│🐓 Ayam : ${user.ayam}
│🐑 Domba : ${user.domba}
│🐎 Kuda : ${user.horse}
╰───────────━⃝┅⃝━───────────┘

╭───────[ DURABILITY ]────────┐
│🥋 Armor : ${user.armor} (${user.armordurability})
│⚔️ Sword : ${user.sword} (${user.sworddurability})
│🪓 Pickaxe : ${user.pickaxe} (${user.pickaxedurability})
│🦯 Fishingrod : ${user.fishingrod} (${user.fishingroddurability})
╰───────────━⃝┅⃝━───────────┘

╭────────[ COOLDOWN ]───────┐
│🕢 Hourly : ${
      user.lasthourly > 1
        ? Func.clockString(3600000 - (new Date() - user.lasthourly))
        : "Ready"
    }
│🕕 Daily : ${
      user.lastclaim > 1
        ? Func.clockString(86400000 - (new Date() - user.lastclaim))
        : "Ready"
    }
│🕝 Weekly : ${
      user.lastweekly > 1
        ? Func.clockString(604800000 - (new Date() - user.lastweekly))
        : "Ready"
    }
│🕦 Monthly : ${
      user.lastmonthly > 1
        ? Func.clockString(2592000000 - (new Date() - user.lastmonthly))
        : "Ready"
    }
╰───────────━⃝┅⃝━───────────┘`.trim();
    m.reply(txt);
  },
};
