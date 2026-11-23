import { useState, useMemo } from "react";
import { friendsData } from "./data/friends";
import { useAudio } from "./hooks/useAudio";
import { useToast } from "./hooks/useToast";
import PhoneFrame from "./components/PhoneFrame";
import HomeScreen from "./components/HomeScreen";
import BlendScreen from "./components/BlendScreen";
import FriendsSheet from "./components/FriendsSheet";
import Toast from "./components/Toast";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [friendIndex, setFriendIndex] = useState(0);
  const [balance, setBalance] = useState(50);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const { toast, showToast } = useToast();
  const currentFriend = friendsData[friendIndex];

  const sortedTracks = useMemo(() => {
    return [...currentFriend.tracks].sort((a, b) => {
      const weight = (t) => {
        if (t.owner === "me") return 100 - balance;
        if (t.owner === "friend") return balance;
        return 50;
      };
      return weight(b) - weight(a);
    });
  }, [currentFriend, balance]);

  const currentTrack = sortedTracks[activeIdx] || sortedTracks[0];
  const { audioRef, isPlaying, progress, play, toggle, seek } = useAudio(
    currentTrack?.src,
  );

  const handleSelectTrack = (idx) => {
    setActiveIdx(idx);
    setTimeout(() => play(), 30);
  };

  const handleNext = () => {
    const next = (activeIdx + 1) % sortedTracks.length;
    setActiveIdx(next);
    setTimeout(() => play(), 30);
  };

  const handlePrev = () => {
    const prev = (activeIdx - 1 + sortedTracks.length) % sortedTracks.length;
    setActiveIdx(prev);
    setTimeout(() => play(), 30);
  };

  const handleSelectFriend = (idx) => {
    setFriendIndex(idx);
    setBalance(50);
    setActiveIdx(0);
    setIsSheetOpen(false);
    setScreen("blend");
    setTimeout(() => play(), 60);
  };

  const handleShare = () => {
    showToast(
      `Карточка «${currentFriend.pairTitle} (${currentFriend.match}%)» скопирована для отправки в ВК`,
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <audio ref={audioRef} src={currentTrack?.src} preload="metadata" />

      <div className="mb-3 text-center">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/85 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#EC53F6] animate-pulse" />
          Интерактивный прототип VK Музыка • Фича: Совместный микс
        </span>
      </div>

      <PhoneFrame>
        {screen === "home" ? (
          <HomeScreen
            isPlaying={isPlaying}
            onTogglePlay={toggle}
            onOpenFriends={() => setIsSheetOpen(true)}
            activeFriend={currentFriend} onQuickBlend={() => handleSelectFriend(friendIndex)}
            onToast={showToast}
          />
        ) : (
          <BlendScreen
            friend={currentFriend}
            balance={balance}
            onBalanceChange={setBalance}
            tracks={sortedTracks}
            activeIdx={activeIdx}
            isPlaying={isPlaying}
            progress={progress}
            onSelectTrack={handleSelectTrack}
            onTogglePlay={toggle}
            onNext={handleNext}
            onPrev={handlePrev}
            onSeek={seek}
            onBack={() => setScreen("home")}
            onOpenFriendsSheet={() => setIsSheetOpen(true)}
            onShare={handleShare}
          />
        )}

        <FriendsSheet
          open={isSheetOpen}
          friends={friendsData}
          onSelect={handleSelectFriend}
          onClose={() => setIsSheetOpen(false)}
        />

        <Toast toast={toast} />
      </PhoneFrame>
    </div>
  );
}
