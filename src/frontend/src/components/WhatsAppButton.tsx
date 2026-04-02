export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918800095472"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-[9999] flex items-center justify-center"
      data-ocid="whatsapp.link"
    >
      {/* Pulse ring */}
      <span
        className="absolute inline-flex h-14 w-14 rounded-full opacity-60 animate-ping"
        style={{ backgroundColor: "#25D366" }}
      />

      {/* Button */}
      <span
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 group-hover:scale-110"
        style={{
          backgroundColor: "#25D366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <title>WhatsApp</title>
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.469-2.004A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 01-6.771-1.851l-.486-.288-5.03 1.189 1.212-4.893-.317-.502A13.235 13.235 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.354-1.162-2.719-1.295-.365-.133-.631-.199-.897.199-.266.398-1.029 1.295-1.262 1.561-.232.266-.465.3-.863.1-.398-.2-1.681-.619-3.202-1.975-1.183-1.055-1.982-2.358-2.214-2.756-.232-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.2-.897-2.162-1.229-2.96-.324-.777-.653-.672-.897-.684l-.764-.013c-.266 0-.697.1-.1063.498-.365.398-1.395 1.362-1.395 3.323s1.428 3.855 1.627 4.121c.199.266 2.811 4.291 6.811 6.019.952.411 1.695.656 2.274.839.955.304 1.825.261 2.512.158.766-.114 2.354-.962 2.686-1.891.332-.93.332-1.727.232-1.892-.1-.164-.365-.264-.763-.464z" />
        </svg>
      </span>

      {/* Tooltip */}
      <span
        className="absolute right-16 whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          backgroundColor: "#075E54",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        Chat with us
        {/* Arrow */}
        <span
          className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderLeft: "6px solid #075E54",
          }}
        />
      </span>
    </a>
  );
}
