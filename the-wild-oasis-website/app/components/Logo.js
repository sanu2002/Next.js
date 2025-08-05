function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 z-10">
      <img
        style={{borderRadius:'50px', filter:"" }}
        src="https://images.unsplash.com/photo-1691520326140-05a37ea5d9c9?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height="60"
        width="60"
        
        alt="The wild Oasis Logo"
      />
      <span className="text-xl font-semibold text-red-500">
        The wild Oasis
      </span>
    </a>
  );
}

export default Logo;
