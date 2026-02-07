// Mock data for gym subscription management
export const initialMembers = [
  {
    id: 1,
    name: "Layla Al-Rashid",
    email: "layla.rashid@email.com",
    phone: "+966 50 123 4567",
    joinDate: "2024-01-15",
    subscriptionStatus: "active",
    subscriptionType: "Premium",
    monthlyFee: 300,
    lastPayment: "2025-02-01",
    nextPayment: "2025-03-01",
    loginDays: 68,
    avatar: "👩‍🦰"
  },
  {
    id: 2,
    name: "Nora Al-Qahtani",
    email: "nora.qahtani@email.com",
    phone: "+966 50 234 5678",
    joinDate: "2024-02-20",
    subscriptionStatus: "active",
    subscriptionType: "Premium",
    monthlyFee: 300,
    lastPayment: "2025-02-01",
    nextPayment: "2025-03-01",
    loginDays: 54,
    avatar: "👩‍🦱"
  },
  {
    id: 3,
    name: "Hala Al-Mutairi",
    email: "hala.mutairi@email.com",
    phone: "+966 50 345 6789",
    joinDate: "2024-03-10",
    subscriptionStatus: "inactive",
    subscriptionType: "Premium",
    monthlyFee: 300,
    lastPayment: "2024-12-01",
    nextPayment: "2025-01-01",
    loginDays: 42,
    avatar: "👩"
  },
  {
    id: 4,
    name: "Sarah Al-Dosari",
    email: "sarah.dosari@email.com",
    phone: "+966 50 456 7890",
    joinDate: "2024-04-05",
    subscriptionStatus: "active",
    subscriptionType: "Premium",
    monthlyFee: 300,
    lastPayment: "2025-02-01",
    nextPayment: "2025-03-01",
    loginDays: 61,
    avatar: "👩‍🦳"
  },
  {
    id: 5,
    name: "Maha Al-Shammari",
    email: "maha.shammari@email.com",
    phone: "+966 50 567 8901",
    joinDate: "2024-05-12",
    subscriptionStatus: "active",
    subscriptionType: "Premium",
    monthlyFee: 300,
    lastPayment: "2025-02-01",
    nextPayment: "2025-03-01",
    loginDays: 73,
    avatar: "👱‍♀️"
  }
];

// Statistics data
export const getStatistics = (members) => {
  const activeMembers = members.filter(m => m.subscriptionStatus === 'active').length;
  const inactiveMembers = members.filter(m => m.subscriptionStatus === 'inactive').length;
  const monthlyRevenue = activeMembers * 300;
  const yearlyRevenue = monthlyRevenue * 12;
  const totalLoginDays = members.reduce((sum, member) => sum + member.loginDays, 0);
  const averageLoginDays = Math.round(totalLoginDays / members.length);

  return {
    totalMembers: members.length,
    activeMembers,
    inactiveMembers,
    monthlyRevenue,
    yearlyRevenue,
    totalLoginDays,
    averageLoginDays
  };
};

// Classes data
export const gymClasses = [
  { id: 1, name: "Morning Yoga", instructor: "Fatima Ahmed", time: "6:00 AM", spots: "12/20", day: "Daily" },
  { id: 2, name: "HIIT Training", instructor: "Aisha Mohammed", time: "7:30 AM", spots: "8/15", day: "Mon, Wed, Fri" },
  { id: 3, name: "Pilates", instructor: "Mariam Hassan", time: "5:00 PM", spots: "15/20", day: "Tue, Thu" },
  { id: 4, name: "Zumba", instructor: "Rania Ali", time: "6:30 PM", spots: "18/25", day: "Daily" }
];
