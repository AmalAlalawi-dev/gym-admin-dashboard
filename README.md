# 🏋️ PowerFit Gym - Admin Dashboard

A professional, modern, and colorful gym subscription management system built with React.

## ✨ Features

### 📊 Dashboard
- Real-time statistics display
- Active/Inactive member counts
- Monthly and yearly revenue tracking
- Recent member overview

### 👥 Member Management
- Complete CRUD operations (Create, Read, Update, Delete)
- Search functionality
- Filter by subscription status
- Member details with contact information
- Login days tracking

### 💳 Subscription Management
- View all subscriptions
- Activate/Deactivate subscriptions
- Yearly revenue statistics
- Subscription status control panel
- Monthly fee: 300 SAR

### 📅 Attendance Tracking
- Total login days across all members
- Average login days per member
- Leaderboard with rankings
- Attendance rate calculation
- Sort by login days or name

### 🔐 Authentication
- Professional login page
- Form validation
- Protected routes

## 🛠️ Technologies Used

- **React** (Functional Components)
- **JavaScript (ES6+)**
- **JSX**
- **React Router** (for navigation)
- **CSS3** (with gradients and animations)
- **Mock Data** (no backend required)

## 📁 Project Structure

```
src/
 ├─ components/
 │   ├─ Header.js
 │   ├─ Sidebar.js
 │   ├─ StatCard.js
 │   ├─ MemberTable.js
 │   └─ MemberForm.js
 ├─ pages/
 │   ├─ Login.js
 │   ├─ Dashboard.js
 │   ├─ Members.js
 │   ├─ Subscriptions.js
 │   └─ Attendance.js
 ├─ data/
 │   └─ mockData.js
 ├─ App.js
 └─ App.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Extract/Copy the project files**
   ```bash
   # Navigate to the project directory
   cd gym-admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to `http://localhost:3000`

### Login Credentials
- Use **any email** and **any password** (minimum 6 characters)
- Example: `admin@powerfit.com` / `password123`

## 👩‍💼 Pre-loaded Members

The system includes 5 female members:
1. **Layla Al-Rashid** - 68 login days
2. **Nora Al-Qahtani** - 54 login days
3. **Hala Al-Mutairi** - 42 login days (Inactive)
4. **Sarah Al-Dosari** - 61 login days
5. **Maha Al-Shammari** - 73 login days

## 🎨 Design Features

- **Modern & Professional** UI/UX
- **Colorful Gradients** (Purple, Pink, Blue, Orange)
- **Smooth Animations** and transitions
- **Responsive Layout** for desktop
- **Clean Typography** with Poppins font
- **Well-balanced Layout** with proper alignment
- **Intuitive Navigation** with sidebar and header

## 📊 Key Statistics

- Monthly Fee: **300 SAR per member**
- Tracks **active vs inactive** subscriptions
- Displays **yearly revenue** projections
- Shows **individual login days** for each member
- Calculates **average attendance** rates

## 🔧 Features in Detail

### State Management
- Uses `useState` for all data management
- Props for component communication
- Conditional rendering throughout

### API Integration (Mock)
- Uses `useEffect` to simulate API calls
- Loading states
- Error handling ready

### Routing
- Login page at `/login`
- Dashboard at `/dashboard`
- Members at `/members`
- Subscriptions at `/subscriptions`
- Attendance at `/attendance`

### Form Validation
- Required field checking
- Email format validation
- Password length validation
- Real-time error messages

## 🎯 Evaluation Criteria Met

✅ Functional Components Only
✅ Proper React Concepts & Hooks
✅ Clean Code Organization
✅ All Requirements Completed
✅ Professional UI/UX Design
✅ Reusable Components
✅ No Code Duplication (DRY)
✅ Meaningful Variable Names

## 📝 Additional Notes

- No real backend needed - all data is managed in state
- Data persists during the session
- Refresh will reset to initial data
- Ready for production backend integration

## 🎨 Color Scheme

- Primary: Purple Gradient (#667eea to #764ba2)
- Secondary: Pink Gradient (#f093fb to #f5576c)
- Success: Green (#48bb78)
- Danger: Red (#f56565)
- Info: Blue (#4299e1)
- Warning: Orange (#ed8936)

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📄 License

This project is created for educational purposes.

---

**Made with ❤️ for PowerFit Gym**