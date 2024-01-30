const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {children}
    </div>
  );
};

export default AuthLayout;
