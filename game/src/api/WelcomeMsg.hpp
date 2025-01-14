
#pragma once


namespace API {
    struct Player;
    enum class WelcomeMsgType : int;
}

namespace API {

    struct WelcomeMsg {
std::string toString() const;
void fromString(const std::string &str);
        std::vector<std::string> chat_log;
        double id;
        std::vector<Player> players;
        bool private_session;
        bool rolled;
        std::vector<double> rolls;
        double turn_index;
        WelcomeMsgType type = static_cast<WelcomeMsgType>(0);
        std::vector<bool> used;
        bool victory;
    };
}
