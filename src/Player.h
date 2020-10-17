#pragma once
#include <json.hpp>
#include <string>

#include "Consts.h"

using json = nlohmann::json;

struct PlayerClaim {
    bool verified;
    std::string picture_url;
    std::string username;
    std::string sub;
};

class Player {
  public:
    Player();

    Player(std::string session, PlayerClaim claim);

    const std::string &getSession() const;
    void setSession(std::string session);

    void disconnect();
    void reconnect();

    bool isConnected() const;

    int addScore(int n);

    int getScore() const;

    int addWin(int n);

    void reset();

    void setName(std::string &name);

    const std::string &getName() const;

    json toJson() const;

    PlayerClaim claim;

  private:
    std::string session;
    std::string name;
    int score;
    int win_count;
    bool connected;
};
